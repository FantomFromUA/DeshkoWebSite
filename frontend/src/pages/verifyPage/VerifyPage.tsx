import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { verifyAccount } from '../../http/emailcontact';

const VerifyPage = () => {

    const [verifyId] = useSearchParams();


  React.useEffect(() => {
    verifyAccount(verifyId.get("id")!);
    window.location.replace('/signin');
  }, [])

    return (
        <h1>Ви можете закрити цю сторінку</h1>
    );
}
 
export default VerifyPage;