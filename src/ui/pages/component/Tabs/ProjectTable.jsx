import React, { useState, useEffect } from "react";
import CustomButton from '../common/Button'
import { Link, useNavigate, useParams } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import GetWorkspacesProjectDetailsAPI from "../../../../redux/actions/api/WorkspaceDetails/GetWorkspaceProject";
import APITransport from '../../../../redux/actions/apitransport/apitransport';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider,Grid } from "@mui/material";
import tableTheme from "../../../theme/tableTheme";
import Search from "../../component/common/Search";

const ProjectTable = (props) => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const getWorkspaceProjectData = () => {

        const workspaceObjs = new GetWorkspacesProjectDetailsAPI(id);

        dispatch(APITransport(workspaceObjs));
    }

    useEffect(() => {
        getWorkspaceProjectData();
    }, []);

    const workspacesproject = useSelector(state => state.getWorkspacesProjectData.data);
    const SearchWorkspaceProjects = useSelector((state) => state.SearchProjectCards.data);

    const pageSearch = () => {

        return workspacesproject.filter((el) => {

            if (SearchWorkspaceProjects == "") {

                return el;
            } else if (
                el.title
                    ?.toLowerCase()
                    .includes(SearchWorkspaceProjects?.toLowerCase())
            ) {

                return el;
            } 
        })
    }

   
    const columns = [
        {
            name: "Name",
            label: "Name",
            options: {
                filter: false,
                sort: false,
                align: "center",
                setCellHeaderProps: sort => ({ style: { height: "70px", padding: "16px" } }),
            }
        },
        {
            name: "Created By",
            label: "Created By",
            options: {
                filter: false,
                sort: false,
                align: "center"
            }
        },
        {
            name: "Actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                align: "center"
            }
        }];

    // const data = [
    //     ["Shoonya User", "user123@tarento.com", 0, ]
    // ];
    console.log(workspacesproject,"workspacesproject")
    const data = workspacesproject && workspacesproject.length > 0 ? pageSearch().map((el, i) => {
        return [
            el.title,
            el.created_by && el.created_by.username,
            <Link to={`/projects/${el.id}`} style={{ textDecoration: "none" }}>
                <CustomButton
                    sx={{ borderRadius: 2 }}
                    label="View"
                />
            </Link>
        ]
    }) : [];

    const options = {
        textLabels: {
            body: {
                noMatch: "No records",
            },
            toolbar: {
                search: "Search",
                viewColumns: "View Column",
            },
            pagination: { rowsPerPage: "Rows per page" },
            options: { sortDirection: "desc" },
        },
        // customToolbar: fetchHeaderButton,
        displaySelectToolbar: false,
        fixedHeader: false,
        filterType: "checkbox",
        download: false,
        print: false,
        rowsPerPageOptions: [10, 25, 50, 100],
        // rowsPerPage: PageInfo.count,
        filter: false,
        // page: PageInfo.page,
        viewColumns: false,
        selectableRows: "none",
        search: false,
        jumpToPage: true,
    };

    return (
        <div>
            <Grid sx={{ mb: 1 }}>
                <Search />
            </Grid>
            <ThemeProvider theme={tableTheme}>
                <MUIDataTable
                    // title={""}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </ThemeProvider>
        </div>

    )
}

export default ProjectTable;