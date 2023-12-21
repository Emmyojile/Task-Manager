"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteTask = ({ id }) => {
  const router = useRouter();

  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover-cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteTask;
