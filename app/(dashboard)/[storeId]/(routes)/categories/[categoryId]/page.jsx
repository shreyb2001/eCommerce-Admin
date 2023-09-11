import React from "react";
import Category from "../../../../../../models/categoryModel";
import Billboard from "../../../../../../models/billboardModel";
import dbConnect from "../../../../../../lib/mongodb";
import CategoryForm from "./components/category-form";

const CategoryPage = async ({ params }) => {
  await dbConnect();
  const category = await Category.findOne({
    _id: params.categoryId,
  });

  const billboards = await Billboard.find({
    owner: params.storeId,
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
