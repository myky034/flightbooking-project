import React, { useState } from "react";
import "./SideBar.scss";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  GlobeAsiaAustraliaIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  PowerIcon,
  HomeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import aviationLogo from "../../../assets/aviation_logo.png";
import airTravel from "../../../assets/4202194.jpg";

const SideBar = () => {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Card
        className="relative h-[calc(100vh-2rem)] w-full max-w-[15rem] p-1 shadow-xl shadow-blue-gray-900/5"
        style={{ borderRadius: "0", height: "100vh" }}
      >
        <div className="mb-2 flex items-center p-4">
          <div
            style={{
              backgroundImage: `url(${airTravel})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="h-12 w-12"
          ></div>
          <Typography variant="h5" color="blue-gray">
            Flight Booking
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/dashboard"
              className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900"
            >
              Trang Chủ
            </Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <IdentificationIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/staff"
              className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900"
            >
              Nhân Viên
            </Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              to="/customer"
              className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900"
            >
              Khách Hàng
            </Link>
          </ListItem>
          <hr className="my-2 border-blue-gray-50" />
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <GlobeAsiaAustraliaIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal"
                  style={{ margin: "0 0 0 0" }}
                >
                  Quản lý Chuyến bay
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Link
                    to="/flight"
                    className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900"
                  >
                    Chuyến Bay
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Vé
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal"
                  style={{ margin: "0 0 0 0" }}
                >
                  Cài Đặt
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Link
                    to="/airport"
                    className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900"
                  >
                    Sân Bay
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Link className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900">
                    Chặng Bay
                  </Link>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Hãng Bay
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Link
                    to="/ticketclass"
                    className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-normal hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900"
                  >
                    Hạng Vé
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default SideBar;
