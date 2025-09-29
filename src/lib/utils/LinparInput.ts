function limparInput(setState: React.Dispatch<React.SetStateAction<string>>) {
    setState('');
}
function limparVariosInputs(setState: React.Dispatch<React.SetStateAction<string>>[]) {
    setState.map(state => {
        state('')
    })
}

export {
    limparInput,
    limparVariosInputs
}