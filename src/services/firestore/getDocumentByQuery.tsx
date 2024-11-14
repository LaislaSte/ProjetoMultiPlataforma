import {
  collection,
  getDocs,
  query,
  where,
  WhereFilterOp,
} from 'firebase/firestore';
import db from '@configs/Firestore';

import logger from '@utils/logger'

export const getDocumentByQuery = async (
  collectionRefName: string,
  param: string,
  operation: WhereFilterOp,
  value: string
) => {
  const q = query(
    collection(db, collectionRefName),
    where(param, operation, value)
  );

  logger.info('Getting Documents')
  try {
    const result = await getDocs(q);
    logger.info('Get Documents sucessfully!')
    return result;
  } catch (err) {
    logger.error('Failed to get Documents')

  }
};
