import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ParcelModel } from '../../types/parcelModel';
import { getParcelById } from '../../http/parcelHttp';
import { error } from 'console';

const ParcelInfo = () => {

    const navigate = useNavigate();
    const parcelId = useParams<{id : string}>();

    //В папці моделька я 3 нові добавив, то там можеш чекнути, які данні має посилка
    // Не забудь видалити цей комент коли зробиш
    const [parcel, setParcel] = React.useState<ParcelModel>();

    React.useEffect(() => {
        if(parcelId.id === undefined){
            alert("Wrong id!");
            navigate("/tracking");
            return;
        }
        getParcelById(parcelId.id).then((parcel : ParcelModel) => {
            console.log(parcel);
            setParcel(parcel);
            
        }).catch((error : Error) =>{
            alert(error.message);
            navigate("/tracking");
            
        });
    }, [parcelId])

    return (
        <div>
            {parcel?.customer.name}
        </div>
    );
}
 
export default ParcelInfo;