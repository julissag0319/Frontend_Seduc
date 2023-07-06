import { useNavigate } from "react-router-dom";
import {  BsFiles ,BsBookmarkCheck } from "react-icons/bs";
import BackButton from "@/shared/BackButton";

type Props = {
  title: string;
  titleAdd: string;
  titleList: string;
  navigateAddTo: string;
  navigateListTo: string;
};

function BasicLayout({
  title,
  titleAdd,
  titleList,
  navigateAddTo,
  navigateListTo,
}: Props) {
  const Navigate = useNavigate();

  return (
    <div className="h-full flex justify-center items-center border-4 border-white rounded-lg">
      <div className="max-w-1xl bg-white rounded-md p-4">
        <h2 className="pb-5 text-center font-bold text-xl">{title}</h2>

        <div className="flex flex-wrap justify-center items-start h-full justify-items-center">
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg "
            onClick={() => Navigate(navigateAddTo)}>
              <BsBookmarkCheck style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
              <br></br>
           <p className="font-bold text-white text-xl">{titleAdd}</p>
          </div>
          <div
            className="cards-menu-div hover:cursor-pointer border border-color-fondo rounded-lg"
            onClick={() => Navigate(navigateListTo)}>
              <BsFiles style={{color: 'FFFFFF' , fontSize : '50px', margin:'auto' }}/>
            <br></br> 
            <p className="font-bold text-white text-xl">{titleList}</p>
          </div>
        </div>
        <BackButton path="/main-menu-admin" />
      </div>
    </div>
  );
}

export default BasicLayout;