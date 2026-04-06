"use client";
import React, { createContext, useContext } from "react";

export const ModalContext = createContext({
  openModal: () => {},
});

export const useModal = () => useContext(ModalContext);
