
const ViewAllTransportInfo = (props) => {
    // console.log(item)
    const { isActive, codename } = props.item;

    let ck = 0;
    return (
        <div>

            {
                !isActive && <h6 className="text-center">Bus Code name is :{codename}</h6>
            }



        </div>
    )
};
export default ViewAllTransportInfo;