import { Client, Databases, ID } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);

export const updateSearchCount = async(searchTerm, movie) =>{
    //use AppWrite SDK to check if the search term exists in the db
    try{
      const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID,queries[
        Query.equal('searchTerm',searchTerm) //matching what we have in our db to what the users are searching for
      ])  

    //if it does, update the count
      if(result.documents.length>0){
        const doc = result.documents[0];

        await database.updateDocument(DATABASE_ID,COLLECTION_ID,doc.$id,data={
            count: doc.count+1,
        })
        //if it dosent create a new doc with the search term and count as 1
      } else{
        await database.createDocument(DATABASE_ID,COLLECTION_ID,ID.unique(),data={
            searchTerm,
            count: 1,
            movie_id: movie.id,
            poster_url:`https://image.tmbd.org/t/p/w500${movie.poster_url}`,  
        })
      }
    }catch(error){
        console.error(error);
    }
}












