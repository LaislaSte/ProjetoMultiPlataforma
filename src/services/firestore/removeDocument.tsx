import { deleteDoc, doc } from 'firebase/firestore';
import db from '@configs/Firestore';


export const removeDocument = (collectionRefName: string, id: string) => {
  return deleteDoc(doc(db, collectionRefName, id))
    .then(() => {
      useToast({
        initailMessage: 'Removing Document',
        updatedMessage: 'Document removed',
        type: 'success',
      });
    })
    .catch((err) => {
      useToast({
        initailMessage: 'Removing Document',
        updatedMessage: `Error: ${err.code}, ${err.message}`,
        type: 'error',
      });
    });
};
