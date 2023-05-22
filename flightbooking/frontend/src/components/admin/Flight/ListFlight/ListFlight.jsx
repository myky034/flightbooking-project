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
import Pagination from "../../Pagination/Pagination";

const TABLE_HEAD = [
  "Mã chuyến bay",
  "Tên máy bay",
  "Hãng bay",
  "Xuất phát",
  "Đích đến",
  "Ngày tạo",
  "",
];
let PageSize = 6;

const ListFlight = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [ticketclass, setTicketClass] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableTicketClass = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return ticketclass.slice(firstPageIndex, lastPageIndex);
    });

    useEffect(() => {
      setIsLoading(true);
      getTicketClass();
    }, []);

    //get method
    const getTicketClass = async () => {
      await axios
        .get("http://localhost:8080/api/ms-hangve/danhsach-hangve?id=ALL")
        .then(function (res) {
          setTicketClass(res.data.data);
          setIsLoading(false);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (!ticketclass) {
      return "Không có chuyến bay nào. Hãy thêm mới chuyến bay.";
    } else if (isLoading) {
      return (
        <div
          className="spinner-loading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      );
    }

  return (
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
            <Button className="flex items-center gap-3" color="blue" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
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
                const isLast = index === ticketclass.length - 1;
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
                      >
                        {item.tenhangve}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.loaive}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.giavecoban}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.createdAt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.createdAt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.createdAt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="View">
                        <IconButton variant="text" color="blue-gray">
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Edit">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete">
                        <IconButton variant="text" color="blue-gray">
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
          totalCount={ticketclass.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </CardFooter>
    </Card>
  );
}

export default ListFlight
