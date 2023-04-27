import {
  SellerDashboardLayout,
  IslandDashboard,
  FormColumn,
  FormContainer,
  FormRow,
  Input,
  SwitchForm,
  AdminCreateBeatForm,
} from "@/components";

import {
  handleInputChange,
  handleSubmit,
  validateForm,
} from "@/data/formLogic";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminPostUser } from "@/redux/slices/admin";
import { useRouter } from "next/router";

export default function AdminBeatsCreate() {
  const childRef = useRef(null);

  const handleExternalSubmit = () => {
    childRef.current.submit();
  };

  return (
    <>
      <main>
        <SellerDashboardLayout
          topBarMode="action"
          topBarMessage="Edit Beat"
          topBarButtonLabel="Guardar cambios"
          onClick={handleExternalSubmit}
        >
          <IslandDashboard className="flex flex-col gap-5 xl:gap-8 ">
            <AdminCreateBeatForm mode="edit" ref={childRef} />
          </IslandDashboard>
        </SellerDashboardLayout>
      </main>
    </>
  );
}
