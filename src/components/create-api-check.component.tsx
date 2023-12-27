"use client";

import { useState, Fragment, FormEvent, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { heroGradient } from "@/lib/styles/gradients";

export default function ModalVideo() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [headers, setHeaders] = useState<{ [key: string]: string }[]>([
    { id: "0", key: "Authorization", value: "Bearer ..." },
  ]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = Object.fromEntries(new FormData(event.currentTarget));
    console.log(credentials);
    console.log(headers);
    setModalOpen(false);
  };

  useEffect(() => {
    setHeaders([{ id: "0", key: "Authorization", value: "Bearer ..." }]);
  }, [modalOpen]);

  return (
    <div>
      <button
        className={
          " p-4 rounded-md hover:animate-pulse focus:animate-pulse bg-gray-900 text-white"
        }
        type="button"
        onClick={() => setModalOpen(true)}
      >
        Create API check
      </button>

      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          <Transition.Child
            className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          <Transition.Child
            className="fixed inset-0 z-10 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="mx-auto w-1/3 h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-lg shadow-2xl aspect-video bg-white">
                <div className="text-gray-900 p-10">
                  <div className="flex flex-row flex-auto justify-between">
                    <p className="text-lg mb-6">Create API Check</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 hover:bg-red-600 hover:cursor-pointer rounded-full"
                      type="button"
                      onClick={() => setModalOpen(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <form
                    className="text-gray-900 flex flex-col space-y-2"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <label className="text-base" htmlFor="name">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      aria-label="name"
                      placeholder="Ping Google every 5 minutes"
                      className="placeholder-gray-400 bg-gray-200 border border-neutral-700 h-14 rounded-md p-4"
                    />
                    <label className="text-base" htmlFor="url">
                      url
                    </label>
                    <input
                      name="url"
                      type="text"
                      aria-label="url"
                      placeholder="https://www.google.com"
                      className="placeholder-gray-400 bg-gray-200 border border-neutral-700 h-14 rounded-md p-4"
                    />
                    <label className="text-base" htmlFor="interval">
                      Run check every...
                    </label>
                    <select
                      name="interval"
                      id="interval"
                      className="placeholder-gray-400 bg-gray-200 border border-neutral-700 h-14 rounded-md p-4"
                    >
                      <option value="60000">1 minute</option>
                      <option value="300000">5 minutes</option>
                      <option value="1800000">30 minutes</option>
                    </select>
                    <label className="text-base" htmlFor="method">
                      method
                    </label>
                    <select
                      name="method"
                      id="method"
                      className="placeholder-gray-400 bg-gray-200 border border-neutral-700 h-14 rounded-md p-4"
                    >
                      <option value="GET">GET</option>
                      <option value="PATCH">PATCH</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="DELETE">DELETE</option>
                    </select>
                    <label className="text-base" htmlFor="body">
                      body (Optional)
                    </label>
                    <input
                      name="body"
                      type="text"
                      aria-label="body"
                      placeholder="{'hello': 'world'}"
                      className="placeholder-gray-400 bg-gray-200 border border-neutral-700 h-14 rounded-md p-4"
                    />
                    <label className="text-base" htmlFor="headers">
                      headers (Optional)
                    </label>
                    <button
                      onClick={() =>
                        setHeaders([
                          ...headers,
                          {
                            id: headers.length.toString(),
                            key: "Authorization",
                            value: "Bearer ...",
                          },
                        ])
                      }
                      type="button"
                      className="text-white bg-green-500 rounded-md hover:animate-pulse focus:animate-pulse p-2 flex-end"
                    >
                      +
                    </button>
                    <ul className="space-y-4 w-full">
                      {headers.map((header) => {
                        return (
                          <li
                            key={header.id}
                            className="flex flex-row space-x-2"
                          >
                            <input
                              name="header"
                              type="text"
                              aria-label="header"
                              placeholder={header.key}
                              className="placeholder-gray-400 bg-gray-200 border border-neutral-700 rounded-md p-4 flex-auto h-14 w-10"
                              onChange={(e) =>
                                setHeaders([
                                  ...headers.map((i) => {
                                    if (i.id === header.id) {
                                      i.key = e.target.value;
                                    }
                                    return i;
                                  }),
                                ])
                              }
                            />
                            <input
                              name="header"
                              type="text"
                              aria-label="header"
                              placeholder={header.value}
                              className="placeholder-gray-400 bg-gray-200 border border-neutral-700 rounded-md p-4 flex-auto h-14 w-10"
                              onChange={(e) =>
                                setHeaders([
                                  ...headers.map((i) => {
                                    if (i.id === header.id) {
                                      i.value = e.target.value;
                                    }
                                    return i;
                                  }),
                                ])
                              }
                            />
                            <button
                              className="bg-red-500 hover:cursor-pointer rounded text-white w-6"
                              onClick={() =>
                                setHeaders(
                                  headers.filter((i) => i.id !== header.id)
                                )
                              }
                              type="button"
                            >
                              X
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      className={`${heroGradient} text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-14 rounded-md hover:animate-pulse focus:animate-pulse`}
                      type="submit"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
