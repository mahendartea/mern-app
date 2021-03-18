import React, { useEffect, useState } from "react";
import { Button, Sidebar } from "../../components";
import { useHistory } from "react-router-dom";
import Card from "../../components/molecules/Card";
import Axios from "axios";
import moment from "moment";

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/posts?page=1&perPage=3")
      .then((result) => {
        console.log("Data API ", result.data);
        const responseAPI = result.data;

        setDataBlog(responseAPI.data);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="h-full">
      <div className="flex">
        <div className="flex flex-col w-1/5 border-r-2 border-gray-700 p-5 bg-pertama overflow-y-auto">
          <Sidebar />
        </div>

        <div className="w-5/6 p-5 flow-root">
          <Button
            title="Tambah data"
            onClick={() => history.push("/create-blog")}
            className="cursor-pointer shadow-md capitalize font-semibold text-sm px-5 text-putih py-2 bg-kedua hover:bg-keempat rounded-md"
          />
          {/* Card */}
          <div className="grid grid-cols-3 gap-4 overflow-hidden p-5">
            {dataBlog.map((blog) => {
              return (
                <Card
                  key={blog._id}
                  image={`http://localhost:4000/${blog.image}`}
                  title={blog.title}
                  body={blog.body}
                  name={blog.author.name}
                  date={moment(blog.createdAt).fromNow()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
