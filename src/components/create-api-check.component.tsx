"use client";

import { useState, Fragment, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalVideo() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [interval, setInterval] = useState<string>("6000");
  const [method, setMethod] = useState<string>("GET");
  const [body, setBody] = useState<string>("");
  const [headers, setHeaders] = useState<{ [key: string]: string }[]>([
    { id: "0", key: "Authorization", value: "Bearer ..." },
  ]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, url, interval, method, body, headers);
  };

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
            <div className="mx-auto w-1/2 h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-lg shadow-2xl aspect-video bg-white">
                <div className="text-gray-900 p-10">
                  <p className="text-lg mb-6">Create API Check</p>
                  <form
                    className="text-gray-900 flex flex-col space-y-2 p-10"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      type="text"
                      aria-label="name"
                      placeholder="Ping Google every 5 minutes"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="url">url</label>
                    <input
                      name="url"
                      type="text"
                      aria-label="url"
                      placeholder="https://www.google.com"
                      onChange={(e) => setUrl(e.target.value)}
                    />
                    <label htmlFor="interval">Run check every...</label>
                    <select
                      name="interval"
                      id="interval"
                      onChange={(e) => setInterval(e.target.value)}
                    >
                      <option value="60000">1 minute</option>
                      <option value="300000">5 minutes</option>
                      <option value="1800000">30 minutes</option>
                    </select>
                    <label htmlFor="method">method</label>
                    <select
                      name="method"
                      id="method"
                      onChange={(e) => setMethod(e.target.value)}
                    >
                      <option value="GET">GET</option>
                      <option value="PATCH">PATCH</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="DELETE">DELETE</option>
                    </select>
                    <label htmlFor="body">body</label>
                    <input
                      name="body"
                      type="text"
                      aria-label="body"
                      placeholder="{'hello': 'world'}"
                      onChange={(e) => setBody(e.target.value)}
                    />
                    <label htmlFor="headers">headers</label>
                    <ul className="w-auto">
                      {headers.map((header) => {
                        return (
                          <li
                            key={header.id}
                            className="flex flex-row justify-evenly flex-wrap space-x-2"
                          >
                            <input
                              name="header"
                              type="text"
                              aria-label="header"
                              placeholder={header.key}
                              className="flex-auto w-10"
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
                              className="flex-auto w-10"
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
                              onClick={() =>
                                setHeaders(
                                  headers.filter((i) => i.id !== header.id)
                                )
                              }
                              type="button"
                            >
                              Remove
                            </button>
                          </li>
                        );
                      })}
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
                      >
                        Add Header
                      </button>
                    </ul>
                    <button type="submit">Create</button>
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
