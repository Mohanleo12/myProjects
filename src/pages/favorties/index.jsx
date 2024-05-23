import { useContext } from "react";
import RecipeList from "../../components/recipe-item";
import { GlobalContext } from "../../context";


export default function Favorites(){
    const { favoritesList } = useContext(GlobalContext);
    return (
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <RecipeList item={item} />)
        ) : (
          <div>
            <p className='lg:text-4xl text-xl text-center text-black font-extrabold '>
              Nothing is added into your favorites.
            </p>
          </div>
        )}
      </div>
    );
}