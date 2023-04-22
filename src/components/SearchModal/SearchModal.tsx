import React, { useState } from "react";
import Router from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import styled from "@emotion/styled";

import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

import Logo from "@/components/CustomIcon/Logo";
import SearchNameInput from "@/components/SearchModal/components/SearchNameInput";
import SearchSelect from "@/components/SearchModal/components/SearchSelect";

export default function SearchModal() {
  const methods = useForm({
    defaultValues: {
      option: "",
      name: "",
    },
  });
  const [option, setOption] = useState<"brand" | "perfume" | "notes">("brand");

  const optionValue = methods.watch("option");
  const nameValue = methods.watch("name");

  const onSearch = async () => {
    if (optionValue && nameValue) {
      const query = { [optionValue]: nameValue };
      Router.push({
        pathname: `/perfumes/search`,
        query,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Container>
        <LogoBox>
          <Logo
            style={{ width: "155px", height: "auto", margin: "1rem auto" }}
          />
          <Typography>객관화되는 나의 향, 나의 취향</Typography>
        </LogoBox>
        <Form
          onSubmit={methods.handleSubmit(onSearch)}
          style={{ border: "1px solid #000", width: "500px", margin: "0 auto" }}
        >
          <SearchSelect optionCb={setOption} />
          <SearchNameInput />
          <label htmlFor="search" className="search-icon">
            <IconButton
              color="primary"
              aria-label="search"
              type="submit"
              onClick={onSearch}
            >
              <SearchIcon />
            </IconButton>
          </label>
        </Form>
      </Container>
    </FormProvider>
  );
}

const Container = styled.div`
  width: 550px;
  height: 280px;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & .css-qg300q-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0;
    width: 370px;
  }
  & .search-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

const LogoBox = styled.div`
  text-align: center;
  margin: 2rem 0 3rem;
`;
