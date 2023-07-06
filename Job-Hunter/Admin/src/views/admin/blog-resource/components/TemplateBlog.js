import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid-pro';
import {
  randomId,
} from '@mui/x-data-grid-generator';
import { Link, Navigate } from 'react-router-dom';
import { useStateContext } from 'context/ContextProvider';
import axiosClient from 'axios-client';



function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };
  const RemoveLicense=()=>{
    const observer = new MutationObserver(function(mutationsList, observer) {
      let license = document.getElementsByClassName('MuiDataGrid-main css-204u17-MuiDataGrid-main');
      if (license.length > 0) {
      console.log(license[0].children[2].remove())
      observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  RemoveLicense();
  
  return (
    <Link to={'/admin/blog-resource/create-blog'}>
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
    </Link>
  );
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function TemplateBlog({tblHeader,columnType, keyPair,value,searchHandler}) {
  const {blogs} = useStateContext();
  const initialRows = value;
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [search,setSearch]=React.useState('');
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };
  
  const handleEditClick = (id) => () => {
    const temBlog = blogs.find(blog => blog.id === id);
    const temBlogJSON = JSON.stringify(temBlog);
    localStorage.setItem('temBlog',temBlogJSON);
  };
  
  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    axiosClient.delete(`/blog/${id}`);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    console.log(updatedRow)
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const colAction ={
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
  
      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key={id}
            icon={<SaveIcon />}
            label="Save"
            sx={{
              color: 'primary.main',
            }}
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            key={id}
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }
  
      return [
        <Link to={'/admin/blog-resource/edit-blog/'+id}><GridActionsCellItem
          key={id}
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        /></Link>,
        <GridActionsCellItem
          key={id}
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  }
  const columns = tblHeader.map((item,index)=>{
    return { field: keyPair[index], headerName: item,type:columnType[index], width: 180, editable: true }
  })
  columns.push(colAction)
  React.useEffect(() => {
    let timer = setTimeout(() => {
      searchHandler(search)
    },1500)
    return ()=>{
      clearTimeout(timer)
    };
  },[search])
  return (<>
        <div className='w-max mx-auto mb-4 dark:text-white border-collapse border-2 rounded-xl border-gray-400'>
          {React.useMemo(() =>{
            return <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={(e) => {
                setSearch(e.target.value)
              }}
            />
          </Search>
          },[])}
    </div>
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGridPro
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
    </>);
}