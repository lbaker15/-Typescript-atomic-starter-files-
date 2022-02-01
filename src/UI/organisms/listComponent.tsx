import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";
import Card from "../molecules/card";


const ListComponent = ({ array, moreItemsLoading, loadMore, hasNextPage, changeCurr, curritem }: any) => {
  const [screenWidth, setScreenWidth] = useState(0)
  const [resize, setResize] = useState<any>([])
  const Row = ({ index, style }: any) => {
    
    return (
        <div style={style} className="small-card">
            <button
            onClick={changeCurr}
            value={array[index].id}
            className={array[index] === curritem ? "small-card__inner small-card__inner--active card-style" : "small-card__inner card-style"}>
            <Card curritem={array[index]}  />
            </button>
        </div>
    )
  };
  const itemCount = hasNextPage ? array.length + 1 : array.length;

  useEffect(() => {
    setScreenWidth(window.innerWidth - 100)
  }, [resize])

  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
        setResize(resize.concat('changed'))
    })
  }, [])
  return (
    <InfiniteLoader
      isItemLoaded={index => index < array.length}
      itemCount={itemCount}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (
        <React.Fragment>
        <FixedSizeList
          height={(window.innerWidth > 900) ? 400 : 550}
          width={screenWidth}
          itemCount={array.length}
          itemSize={(window.innerWidth > 900) ? 700 : (window.innerWidth < 600) ? 350 : 450}
          layout={'horizontal'}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Row}
        </FixedSizeList>
        </React.Fragment>
      )}

  </InfiniteLoader>
  )
};

export default ListComponent;