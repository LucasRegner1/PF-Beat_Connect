import {
  BeatCard,
  BeatRightSheet,
  BeatDetailSideBar,
  BeatBottomSheet,
  Loader,
  ClientReview,
  ReviewForm,
  EditReviewForm,
} from "@/components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export function externalManageDropdown() {
  // NewBeatCardGrid.handleDropdownOpen();
}

export default function NewBeatCardGrid(props) {
  const [t, i18n] = useTranslation("global");
  const [isDropDown, setIsDropdownOpen] = useState(false);
  const { beatsDisplayMode, generalActiveIndex } =
    useSelector((state) => state?.beats) || 0;
  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropDown);
  };

  NewBeatCardGrid.handleDropdownOpen = handleDropdownOpen;

  const [visibilityEditReview, setVisibilityEditReview] = useState(false);
  const manageEditReview = () => {
    setVisibilityEditReview(!visibilityEditReview);
  };

  const [visibilityCreateReview, setVisibilityCreateReview] = useState(false);
  const manageCreateReview = () => {
    setVisibilityCreateReview(!visibilityCreateReview);
  };
  console.log("props.isLoading", props.isLoading)
  return (
    <>
      {props.isLoading && <Loader />}
      {props.isLoading !== true && props.beats && props.beats <= 0 && (
        <div className="flex w-full items-end justify-center">
          <h1 className="mt-5 text-center text-2xl font-medium">
            {t("NoBeats")} 🤯
          </h1>
        </div>
      )}
      <div className="gap-estilo1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {props.isLoading !== true && props.beats && props.beats.length > 0 && (
          <>
            {props.beats?.map((beat) => (
              <>
                <BeatCard
                  key={beat.id}
                  beat={beat}
                  variant="public"
                  manageView={handleDropdownOpen}
                  manageEditReview={manageEditReview}
                  manageCreateReview={manageCreateReview}
                />
              </>
            ))}
          </>
        )}
      </div>
      {isDropDown && (
        <>
          <div className="hidden sm:flex">
            <BeatRightSheet setIsDropdownOpen={setIsDropdownOpen}>
              <BeatDetailSideBar />
            </BeatRightSheet>
          </div>
          <div className="flex sm:hidden">
            <BeatBottomSheet setIsDropdownOpen={setIsDropdownOpen}>
              <BeatDetailSideBar />
            </BeatBottomSheet>
          </div>
        </>
      )}
      {visibilityEditReview && (
        <>
          <div className="hidden sm:flex">
            <BeatRightSheet
              width="w-[30vw]"
              setIsDropdownOpen={setVisibilityEditReview}
            >
              <EditReviewForm manageEditReview={manageEditReview} />
            </BeatRightSheet>
          </div>
          <div className="flex sm:hidden">
            <BeatBottomSheet setIsDropdownOpen={setIsDropdownOpen}>
              hey soy el sidebar
            </BeatBottomSheet>
          </div>
        </>
      )}
      {visibilityCreateReview && (
        <>
          <div className="hidden sm:flex">
            <BeatRightSheet
              width="w-[30vw]"
              setIsDropdownOpen={setVisibilityCreateReview}
            >
              <ReviewForm manageCreateReview={manageCreateReview} />
            </BeatRightSheet>
          </div>
          <div className="flex sm:hidden">
            <BeatBottomSheet setIsDropdownOpen={setIsDropdownOpen}>
              hey soy el sidebar
            </BeatBottomSheet>
          </div>
        </>
      )}
    </>
  );
}
