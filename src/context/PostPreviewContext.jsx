import { createContext, useState, useEffect, useContext } from "react";

const PostPreviewContext = createContext();

export function PostPreviewProvider({ children }) {
    const [ postCardData, setPostCardData ] = useState([]);    
    const ipfsUrl = "https://ipfs-chainsafe.dev/ipfs/";        
  
    async function fetchData() {
        try {
            const fetchApi = "https://myfav.dev/fetch";
            const response = await fetch(fetchApi, {
                method: "GET",
                headers: {
                    "Origin": window.location.origin 
                }
            });

            if (!response.ok) throw new Error(`Request failed: ${response.status}`);

            const result = await response.json();

            const processData = result.list.map((post) => ({
                ...post,
                image_cover: `${ipfsUrl}${post.image_cover}`                
            }));

            setPostCardData(processData);
        }
        catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    useEffect(() => {
        fetchData();                                
    },[]);

    return (
        <PostPreviewContext.Provider value={{ postCardData }}>
            {children}
        </PostPreviewContext.Provider>
    )
}

export function usePostPreview() {
    const context = useContext(PostPreviewContext);
    if (!context) {
        throw new Error('usePostPreview must be used within a PostPreviewProvider');
    }
    return context;
}