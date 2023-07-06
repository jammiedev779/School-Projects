import { useRef } from "react";
import TextEditor from "../../TextEditor/TextEditor";
import { useStateContext } from "context/ContextProvider";
import axiosClient from "axios-client";

export default function CreateBlog(){
    const {tags} = useStateContext();
    const titleRef = useRef();
    const authorRef = useRef();
    const imageRef = useRef();
    const tagRef = useRef();
    const articleRef = useRef();

    const createHandler = (e)=>{
        e.preventDefault();
        const payload = new FormData();
        payload.append('title',titleRef.current.value);
        payload.append('author',authorRef.current.value);
        payload.append('image',imageRef.current.files[0]);
        payload.append('tag_id',tagRef.current.value);
        payload.append('article',articleRef.current.getContent());

        axiosClient.post('/blog',payload)
        .then(() => {
            window.location.reload();
        })
        .catch(e => window.alert(e));

    }
    return <div className="w-full flex flex-col gap-y-3">
        <form>
        <div className="w-full">
            <label htmlFor="title" className="font-semibold text-base">Blog Title</label>
            <input ref={titleRef} type="text" id="title" className="w-full outline-blueSecondary border-blueSecondary px-2 rounded-lg h-9 border-2" placeholder="Input title of blog"/>
        </div>
        <div className="w-full">
            <label htmlFor="author" className="font-semibold text-base">Author</label>
            <input ref={authorRef} type="text" id="author" className="w-full outline-blueSecondary border-blueSecondary px-2 rounded-lg h-9 border-2" placeholder="Input author of blog"/>
        </div>
        <div className="w-full">
            <label htmlFor="image" className="font-semibold text-base">Upload Image</label>
            <input ref={imageRef} type="file" accept="image/*" id="image" className="file:border-0 w-full file:h-full file:m-0 outline-blueSecondary border-blueSecondary file:bg-blueSecondary file:text-white rounded-lg h-9 border-2" placeholder="Input author of blog"/>
        </div>
        <div className="w-full">
            <label htmlFor="category" className="font-semibold text-base">Category</label>
            <select ref={tagRef} id="category" className="w-full outline-blueSecondary border-blueSecondary px-2 rounded-lg h-9 border-2">
                <option >Select Category</option>
                {tags.map(tag => {
                    return <option key={tag.id} value={tag.id}>{tag.tag}</option>
                })}
            </select>
        </div>
        <div className="w-full">
            <label htmlFor="article" className="font-semibold text-base">Write Article</label>
            <TextEditor ref={articleRef}/>
        </div>
        <div className="flex justify-end">
            <button onClick={createHandler} className="mt-3 bg-blueSecondary text-white px-4 py-2 rounded-lg">Create</button>
        </div>
        </form>
    </div>
}