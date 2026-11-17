import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */

export const getproducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    throw new Error("Error al obtener los productos");
  }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */
export const getProductById = async (id) => {
  try {
    // Creo la referencia al documento
    const productRef = doc(productsRef, id);

    // Trae el documento:
    const snapshot = await getDoc(productRef);

    // Verifico si existe
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};
/* -------------------------------------------------------------------------- */
/*                          SI FILTRO POR CATEGORY                            */
/* -------------------------------------------------------------------------- */
export const getByCategory = async (category) => {
  try {
    let queryRef;

    //truthy
    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }

    // Traer los documentos:
    const snapshot = await getDocs(queryRef);
    //Mapeo de datos para formateo
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                              ALTA DE PRODUCTO                              */
/* -------------------------------------------------------------------------- */
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);

    return docRef.id;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};
// --------------------------------------------------------------------------
// MODIFICAR PRODUCTO
// --------------------------------------------------------------------------

export const updateProduct = async (id, productData) => {
  try {
    const productRef = doc(productsRef, id);

    await updateDoc(productRef, productData);

    return id;
  } catch (error) {
    console.error("Error al modificar producto:", error);
    throw error;
  }
};

// --------------------------------------------------------------------------
// ELIMINAR PRODUCTO
// --------------------------------------------------------------------------

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsRef, id);

    await deleteDoc(productRef);
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
};
