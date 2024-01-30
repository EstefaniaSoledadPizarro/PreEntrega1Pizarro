import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
   const [item, setItem] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      const queryDb = getFirestore();
      const queryCollection = collection(queryDb, 'products');

      if (id) {
         const queryFilter = query(queryCollection, where('categoryId', '==', id));
         getDocs(queryFilter).then((res) => {
            const data = res.docs.map((p) => ({ id: p.id, ...p.data() }));
            console.log(data);
            setItem(data);
         });
      } else {
         getDocs(queryCollection).then((res) => {
            const data = res.docs.map((p) => ({ id: p.id, ...p.data() }));
            console.log(data);
            setItem(data);
         });
      }
   }, [id]);

   return (
      <div style={{ background: 'ivory', minHeight: 'calc(100vh - 58px)' }}>
         <div className='row'>
            <ItemList item={item} />
         </div>
      </div>
   );
};

export default ItemListContainer;