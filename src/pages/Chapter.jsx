import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    const data_format = await res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
    console.log(data);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Chapter List</h1>
      {data.map((chapter) => (
        <ChapterCourse
          key={chapter.ch_id}
          title={chapter.ch_title}
          url={chapter.ch_url}
          view={chapter.ch_view}
          timetotal={chapter.ch_timetotal}
        />
      ))}
    </div>
  );
};

const ChapterCourse = (props) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-lg bg-white">
      <div className="text-lg font-semibold text-gray-700 mb-2">
        {props.title}
      </div>
      <div className="aspect-w-16 aspect-h-9 mb-3">
        <iframe
          src={"https://www.youtube.com/embed/" + props.url}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-medium">Views:</span> {props.view}
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-medium">Total Time:</span> {props.timetotal} minutes
      </div>
    </div>
  );
};

export default Chapter;
