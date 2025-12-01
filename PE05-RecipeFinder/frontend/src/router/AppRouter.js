import { Routes, Route } from "react-router-dom";
import RecipesPage from "../pages/RecipesPage";
import AddRecipePage from "../pages/AddRecipePage";
import EditRecipePage from "../pages/EditRecipePage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage";

export default function AppRouter() {
  return (
    <Routes>
      {/* default → recipe list */}
      <Route path="/" element={<RecipesPage />} />

      {/* nested: list + details in same layout */}
      <Route path="/recipes" element={<RecipesPage />}>
        <Route path=":id" element={<RecipeDetailsPage />} />
      </Route>

      <Route path="/recipes/add" element={<AddRecipePage />} />
      <Route path="/recipes/:id/edit" element={<EditRecipePage />} />
    </Routes>
  );
}
