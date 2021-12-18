const Notify = ({errorMessage}) => {
    return (
        <div style={{color: 'red', display: 'flex', width: '100%'}}>
            {errorMessage}
        </div>
    )
}

export default Notify
