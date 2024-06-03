import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import CourseGenerator from './CourseGenerator';
import { BASE_URL } from '../configs/config';
import AddKnowledgebase from './AddKnowledgebase';

const EditCoursePage = () => {
    const [prevCourseData , setPrevCourseData] = useState(null);
    const params = useParams();
    const {courseId } = params;
    console.log("course id  ", courseId)
    useEffect(()=>{
         const getPrevCourseData = async()=>{
            try{
            const response = await fetch(`${BASE_URL}course/get-course/${courseId}`);
            const data = await response.json();
            console.log("-----------------------------", data);
            setPrevCourseData(data.data);
            }catch(err){
              console.log("course editing error : ",err)
            }
         }
         getPrevCourseData();
    },[])


    
  return (
    <>
    { prevCourseData && <CourseGenerator prevCourseData={prevCourseData} /> }
    <AddKnowledgebase courseId={courseId}/>
    </>
  )
}

export default EditCoursePage
