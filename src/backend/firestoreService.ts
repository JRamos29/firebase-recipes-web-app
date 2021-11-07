import firebase from './config';
import {
  addDoc,
  doc,
  getDoc,
  collection as firestoreCollectionRef,
  // query,
  // where,
  // orderBy,
  // limit,
  // startAfter,
  // getDocs,
  // updateDoc,
  // deleteDoc,
} from 'firebase/firestore';

const firestore = firebase.firestore;

const createDocument = (collection, document) => {
  return addDoc(firestoreCollectionRef(firestore, collection), document);
};

const readDocument = (collection, id) => {
  return getDoc(doc(firestoreCollectionRef(firestore, collection), id));
};

// const readDocuments = async ({
//   collection,
//   queries,
//   orderByField,
//   orderByDirection,
//   perPage,
//   cursorId,
// }) => {
//   const collectionRef = firestoreCollectionRef(firestore, collection);

//   const queryConstraints = [];

//   if (queries && queries.length > 0) {
//     for (const query of queries) {
//       queryConstraints.push(where(query.field, query.condition, query.value));
//     }
//   }
// };

const FirebaseFirestoreService = {
  createDocument,
  readDocument,
};

export default FirebaseFirestoreService;
