import Image from "next/image";
import React, { Suspense } from "react";
import { unstable_after as after } from "next/server";

export const experimental_ppr = true;
export const force_dynamic = true;

function Loading() {
  return (
    <div className="col-span-4 space-y-4 lg:col-span-1 min-h-screen w-full mt-20">
      <div className="animate-pulse h-4 w-full rounded-lg bg-gray-900" />
      <div className="animate-pulse h-6 w-1/3 rounded-lg bg-gray-900" />
      <div className="animate-pulse h-4 w-full rounded-lg bg-gray-900" />
      <div className="animate-pulse h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  );
}

async function Todos() {
  const photos = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await photos.json();

  return (
    <>
      {data.map(
        (item: {
          userId: number;
          id: number;
          title: string;
          completed: boolean;
        }) => (
          <div key={item.id} className="mb-5">
            <h4 className="text-lg">Title: {item.title}</h4>
            <h4 className="text-lg">User: {item.userId}</h4>
            <p className="text-sm">
              Completed: {item.completed ? "Yes" : "No"}
            </p>
          </div>
        )
      )}
    </>
  );
}

const Photos = () => {
  after(() => {
    console.log("finished rendering.");
  });

  return (
    <>
      <div>
        <h2 className="mb-3 font-bold text-2xl">Partial Pre-Rendering</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quod pariatur eligendi odit nam veniam quidem numquam, necessitatibus,
          quos cumque dolorum, optio deserunt nostrum temporibus impedit
          possimus quas? Et, soluta. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Tempora facilis, nostrum nam eum suscipit ratione
          voluptatem iusto esse rerum quam, neque delectus ab ex eligendi quos
          culpa sit modi ea tempore perspiciatis, pariatur ducimus voluptatibus.
          Error, dolor. Sequi dolorum molestias tempore. Tempora veniam
          accusamus nostrum similique porro amet voluptatibus voluptas? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod
          pariatur eligendi odit nam veniam quidem numquam, necessitatibus, quos
          cumque dolorum, optio deserunt nostrum temporibus impedit possimus
          quas? Et, soluta. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Tempora facilis, nostrum nam eum suscipit ratione voluptatem
          iusto esse rerum quam, neque delectus ab ex eligendi quos culpa sit
          modi ea tempore perspiciatis, pariatur ducimus voluptatibus. Error,
          dolor. Sequi dolorum molestias tempore. Tempora veniam accusamus r sit
          amet consectetur adipisicing elit. Blanditiis quod pariatur eligendi
          odit nam veniam quidem numquam, necessitatibus, quos cumque dolorum,
          optio deserunt nostrum temporibus impedit possimus quas? Et, soluta.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          facilis, nostrum nam eum suscipit ratione voluptatem iusto esse rerum
          quam, neque delectus ab ex eligendi quos culpa sit modi ea tempore
          perspiciatis, pariatur ducimus voluptatibus. Error, dolor. Sequi
          dolorum molestias tempore. Tempora veniam accusamus nostrum similique
          porro amet voluptatibus voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis quod pariatur eligendi odit
          nam veniam quidem numquam, necessitatibus, quos cumque dolorum, optio
          deserunt nostrum temporibus impedit possimus quas? Et, soluta. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis,
          nostrum nam eum suscipit ratione voluptatem iusto esse rerum quam,
          neque delectus ab ex eligendi quos culpa sit modi ea tempore
          perspiciatis, pariatur ducimus voluptatibus. Error, dolor. Sequi
          dolorum molestias tempore. Tempora veniam accusamus nostrum similique
          porro amet voluptatibus voluptas?
        </p>
      </div>

      <p className="text-5xl font-bold my-24">All Todos</p>
      <Suspense fallback={<Loading />}>
        <Todos />
      </Suspense>
    </>
  );
};

export default Photos;
