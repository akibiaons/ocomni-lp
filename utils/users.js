import { firestore } from "firebase/firestore";

const getUsers = async () => {
  const snapshot = await firestore.collection("users").get();
  snapshot.docs.forEach((docs = console.log(doc.data)));
};

export { getUsers };
