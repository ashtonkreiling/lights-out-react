export default function Square({isLit, onClick}) {
    let styles = {
        backgroundColor: isLit ? 'lemonchiffon' : 'darkgrey',
    }
    return <button onClick={onClick} className="square" style={styles}>{' '}</button>
}