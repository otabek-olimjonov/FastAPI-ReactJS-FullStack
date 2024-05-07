import React from "react";

import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoadingButton } from "@mui/lab";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

import { ReactComponent as LockIcon } from "@svg/lock.svg";
import { ReactComponent as UserIcon } from "@svg/user.svg";
// import { useTranslation } from 'react-i18next';

const LoginSchema = Yup.object().shape({
  username: Yup.string(),
  password: Yup.string(),
  remember: Yup.bool(),
});

const LoginForm = ({ handleLogin, loading }) => {
  // const { t } = useTranslation(null, { keyPrefix: 'login' });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      username: localStorage.getItem("username") || "",
      password: "",
      remember: Boolean(localStorage.getItem("username")),
    },
  });

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleLogin)}
      style={{ width: "100%" }}
    >
      <Stack spacing={2}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              autoComplete="username"
              autoFocus
              type="text"
              label="User Name"
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ mx: 0.5 }} position="end">
                    <IconButton edge="end" disabled>
                      <UserIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              onCopy={(e) => e.preventDefault()}
              {...field}
              fullWidth
              type="password"
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ mx: 0.5 }} position="end">
                    <IconButton edge="end" disabled>
                      <LockIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="remember"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label="Remember me"
              sx={{
                justifyContent: "center",
                ".MuiFormControlLabel-label": {
                  color: "text.secondary",
                  fontSize: 14,
                },
              }}
            />
          )}
        />
      </Stack>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        sx={{ marginTop: "15px" }}
      >
        Sign in
      </LoadingButton>
    </form>
  );
};

export default LoginForm;
