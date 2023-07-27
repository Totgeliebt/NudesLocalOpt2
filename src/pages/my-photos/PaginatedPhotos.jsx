import { useEffect, useState } from "react";
import React from "react";
import ReactPaginate from "react-paginate";
import MyPhotos from "./MyPhotos";
import { useDispatch, useSelector } from "react-redux";
import { getImageList } from "../../thunkApi/imagesSlice";
import NoPhotos from "./NoPhotos";
import { StyledPaginatedItems } from "../../styles/StyledPaginatedItems";
import {useTranslation} from "react-i18next";

const PaginatedPhotos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.user.user);
  const password = useSelector((state) => state?.auth?.user.password);
  console.log(user, password)
  const imageList = useSelector((state) => state?.images.images);
  const { t } = useTranslation()
  const lng = t("my photos", {returnObjects: true})

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % imageList.length;
    setItemOffset(newOffset);
  };
  const endOffset = itemOffset + itemsPerPage;
  const currentPhoto = [...imageList].reverse()?.slice(itemOffset, endOffset);
  useEffect(() => {
    dispatch(getImageList({user, password}));
    setPageCount(Math.ceil(imageList.length / itemsPerPage));
  }, []);
  if (!imageList?.length) {
    return <NoPhotos />;
  }
  const lastShownPhoto = imageList.length - (itemOffset + 1);
  return (
    <>
      <MyPhotos currentPhoto={currentPhoto} />
      <StyledPaginatedItems>
        <div className="pagination_block">
          <p>
            {lng["shown"]} {itemOffset + 1}-
            {lastShownPhoto < 3 ? imageList.length : endOffset} {lng["out of"]}
            {imageList.length}
          </p>
          <ReactPaginate
            nextLabel=" -->"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<-- "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item-prev"
            previousLinkClassName="page-link-prev"
            nextClassName="page-item-next"
            nextLinkClassName="page-link-next"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="break-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            disabledLinkClassName="disable"
          />
        </div>
      </StyledPaginatedItems>
    </>
  );
};

export default PaginatedPhotos;
