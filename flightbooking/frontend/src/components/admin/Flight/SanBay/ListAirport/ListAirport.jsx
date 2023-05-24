import React, { useEffect, useState, useMemo } from "react";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import Pagination from "../../../Pagination/Pagination";
import { Link } from "react-router-dom";
import moment from "moment";

const TABLE_HEAD = ["Mã sân bay", "Tên sân bay", "Tỉnh", "Ngày tạo", ""];
let PageSize = 5;

const ListAirport = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [airport, setAirport] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableTicketClass = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return airport.slice(firstPageIndex, lastPageIndex);
  });

  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    getAirport();
  }, []);

  //get method
  const getAirport = async () => {
    await axios
      .get("http://localhost:8080/api/ms-sanbay/danhsach-sanbay?id=ALL")
      .then(function (res) {
        setAirport(res.data.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //delete method
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/ms-sanbay/xoa-sanbay?id=${id}`)
      .then(function (res) {
        setAirport(res.data.data);
        console.log(res.data);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Card className="w-full" style={{ margin: "1rem 0 0 0" }}>
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div
            className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center"
            style={{ justifyContent: "flex-end" }}
          >
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button
                className="flex items-center gap-3"
                color="blue"
                size="sm"
              >
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0" style={{ padding: "0" }}>
          <table className="w-full min-w-max table-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 align-center"
                  >
                    <Typography
                      variant="large"
                      color="blue-gray"
                      className="font-bold leading-none opacity-70 align-center"
                      style={{ margin: "1rem 0 1rem 0" }}
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTableTicketClass &&
                currentTableTicketClass.map((item, index) => {
                  const isLast = index === airport.length - 1;
                  const classes = isLast
                    ? "p-2"
                    : "p-2 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                          style={{ marginBottom: "0" }}
                        >
                          {item.maICAO_IATA}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          style={{ marginBottom: "0" }}
                        >
                          {item.tensanbay}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          style={{ marginBottom: "0" }}
                        >
                          {item.tinh}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          style={{ marginBottom: "0" }}
                        >
                          {moment(item.createdAt).format("DD/MM/YYYY")}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="View">
                          <IconButton variant="text" color="blue-gray">
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit User">
                          <IconButton variant="text" color="blue-gray">
                            <Link
                              to={`/editairport/${item.id}`}
                              className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </Link>
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete User">
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={() => handleDelete(item.id)}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={airport.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </CardFooter>
      </Card>
    </>
  );
}

export default ListAirport
