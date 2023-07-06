import Card from 'components/card';
import { useStateContext } from 'context/ContextProvider';
import React, { useState } from 'react';
import { IoMdBusiness, IoMdCreate, IoMdTrash, IoMdCheckmark, IoMdClose } from 'react-icons/io';

const CategoriesTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  const {categories} = useStateContext();

  const CategoriesData = [
    { id: 1, name: 'Software Developer' },
    { id: 2, name: 'Graphic Designer' },
    { id: 3, name: 'Data Analyst' },
    // Add more job categories data here
  ];

  const handleRowHover = (index) => {
    setHoveredRow(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  const handleEditClick = (index) => {
    setEditingRow(index);
  };

  const handleSaveClick = (index) => {
    setEditingRow(null);
    // Perform save action here
  };

  const handleCancelClick = () => {
    setEditingRow(null);
  };

  return (
    <>
    
    <div className="container mx-auto ">
        <div class="flex items-center justify-between pb-2">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
                JobCategories Table
            </div>
        </div>
      <table className="min-w-full bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none ">
        <thead>
        <tr >
            <th className="border-b px-5 border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
                <div className="text-xs font-bold tracking-wide text-gray-600">ID</div>
            </th>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
                <div className="text-xs font-bold tracking-wide text-gray-600">Name</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((jobCategory, index) => (
            <tr
              key={jobCategory.id}
              className={`hover:bg-gray-100 ${
                hoveredRow === index ? 'bg-gray-200' : ''
              }`}
              onMouseEnter={() => handleRowHover(index)}
              onMouseLeave={handleRowLeave}
            >
              <td>
                <p className="text-sm px-5 font-bold text-navy-700 dark:text-white">{jobCategory.id}</p>
              </td>
              <td>
                {editingRow === index ? (
                  <input
                    type="text"
                    value={jobCategory.name}
                    className="border border-gray-300 rounded py-1 px-2"
                  />
                ) : (
                  <p className="text-sm font-bold text-navy-700 dark:text-white">{jobCategory.name}</p>
                  
                )}
              </td>
              <td className="py-2 flex items-center">
                {jobCategory.icon}
                <div className="ml-2 flex">
                  {editingRow === index ? (
                    <>
                      <button
                        className="text-blue-500 mr-2 cursor-pointer"
                        onClick={() => handleSaveClick(index)}
                      >
                        <IoMdCheckmark/>
                      </button>
                      <button
                        className="text-red-500 cursor-pointer"
                        onClick={handleCancelClick}
                      >
                        <IoMdClose/>
                      </button>
                    </>
                  ) : (
                    <IoMdCreate
                      className="text-blue-500 mr-2 cursor-pointer"
                      onClick={() => handleEditClick(index)}
                    />
                  )}
                  {editingRow === null && <IoMdTrash className="text-red-500 cursor-pointer" />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default CategoriesTable;
