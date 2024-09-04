import React, { useState, useEffect } from 'react'
import { getCategories, deletecategory, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'


function Categorylist({ response }) {

    const [categorylist, setCategoryList] = useState([])

    useEffect(() => {
        getData()
    }, [response])


    const getData = async () => {
        const result = await getCategories()
        console.log(result)
        if (result.status == 200) {
            setCategoryList(result.data)
        }

    }

    const deleteCat = async (id) => {
        const result = await deletecategory(id)
        console.log(result)
        if (result.status == 200) {
            getData()
        }
    }

    const dragHandler = async (e, category) => {
        console.log("dropped");
        const vid = JSON.parse(e.dataTransfer.getData("video"));
        category.videos.push(vid)
        const result = await updateCategory(category.id,category);
        console.log(result)
        if(result.status==200){
            toast.success(`${vid.title} video added to ${category.title}`)
            getData()
        }else{
            toast.error("Video-category adding failed")
        }

    }

    const dragOverhandler = (e) => {
        console.log("dragging over");
        e.preventDefault()


    }


    return (
        <>
            <div className='container-fluid border border-3 border-light p-4 mt-3'>
                {
                categorylist.length > 0 ?
                        <div>
                            {
                                categorylist.map(item => (
                                    <div className='border m-1'>
                                        <div className='m-2 p-3  d-flex justify-content-between' onDragOver={(e) => { dragOverhandler(e) }} onDrop={(e) => { dragHandler(e, item) }}>
                                            <h3>{item.title}</h3>
                                            <button className='btn' onClick={() => { deleteCat(item.id) }}>
                                                <i className="fa-solid fa-trash" style={{ color: "#2a7dd5", }} />
                                            </button>
                                        </div>
                                        <div className='border border-light'>
                                            {
                                                item?.videos?.length > 0 &&
                                                <>
                                                    {item?.videos?.map(vid => (
                                                        <VideoCard video={vid} cat={true} />
                                                    ))}
                                                </>
                                            }

                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                        :
                        <h2>No Categories</h2>
                }
            </div>

        </>
    )
}

export default Categorylist