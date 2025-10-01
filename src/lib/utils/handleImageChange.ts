export default function handleImagemChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setErroImagemTamanho: (valor: string | null) => void,
    setImagemBase64: (valor: string) => void,
    setImagemPreview: (valor: string) => void
): Promise<string | null> {
    return new Promise((resolve) => {
        const file = event.target.files?.[0];
        setErroImagemTamanho(null);

        if (!file) {
            setImagemBase64('');
            setImagemPreview('');
            resolve(null);
            return;
        }

        const maxSizeMB = 1;
        const maxSizeInBytes = maxSizeMB * 1024 * 1024;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                if (!ctx) {
                    resolve(null);
                    return;
                }

                let quality = 0.7;
                let width = img.width;
                let height = img.height;
                let compressedBase64 = "";

                const compressImage = () => {
                    canvas.width = width;
                    canvas.height = height;
                    ctx.clearRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0, width, height);

                    compressedBase64 = canvas.toDataURL("image/jpeg", quality);
                    const compressedSize = Math.ceil((compressedBase64.length * 3) / 4);

                    if (compressedSize > maxSizeInBytes) {
                        if (quality > 0.1) {
                            quality -= 0.1;
                            compressImage();
                        } else if (width > 200 && height > 200) {
                            width *= 0.9;
                            height *= 0.9;
                            compressImage();
                        } else {
                            setErroImagemTamanho(`Não foi possível reduzir a imagem para menos de ${maxSizeMB}MB.`);
                            setImagemBase64('');
                            setImagemPreview('');
                            event.target.value = '';
                            resolve(null);
                            return;
                        }
                    } else {
                        setImagemBase64(compressedBase64);
                        setImagemPreview(compressedBase64);
                        resolve(compressedBase64);
                    }
                };

                compressImage();
            };
        };

        reader.readAsDataURL(file);
    });
}