import Request from "../types/Request";
import { Response } from "express";
import axios from "axios";
import HttpStatusCodes from "http-status-codes";
import Config from "../config/default";

export const fetchRestaurant = async (req: Request, res: Response) => {
  axios
    .get(`${Config.restaurant_service_url}/fetch`)
    .then((result) => {
      return res.status(HttpStatusCodes.OK).send(result.data);
    })
    .catch((error) => {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    });
};
export const getRestaurant = async (req: Request, res: Response) => {
  axios
    .post(`${Config.restaurant_service_url}/get`, {
      code: req.body.code,
    })
    .then((result) => {
      return res.status(HttpStatusCodes.OK).send(result.data);
    })
    .catch((error) => {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    });
};
export const searchRestaurant = async (req: Request, res: Response) => {
  axios
    .post(`${Config.restaurant_service_url}/search`, {
      query: req.body.query,
    })
    .then((result) => {
      return res.status(HttpStatusCodes.OK).send(result.data);
    })
    .catch((error) => {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    });
};
export const createRestaurant = async (req: Request, res: Response) => {
  axios
    .post(`${Config.restaurant_service_url}/create`, {
      ...req.body,
      user_id: req.user_id,
    })
    .then((result) => {
      return res.status(HttpStatusCodes.OK).send(result.data);
    })
    .catch((error) => {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    });
};
export const updateRestaurant = async (req: Request, res: Response) => {
  axios
    .put(`${Config.restaurant_service_url}/update`, {
      ...req.body,
      user_id: req.user_id,
    })
    .then((result) => {
      return res.status(HttpStatusCodes.OK).send(result.data);
    })
    .catch((error) => {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    });
};
export const deleteRestaurant = async (req: Request, res: Response) => {
  axios
    .post(`${Config.restaurant_service_url}/delete`, {
      code: req.body.code,
      user_id: req.user_id,
    })
    .then((result) => {
      return res.status(HttpStatusCodes.OK).send(result.data);
    })
    .catch((error) => {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    });
};
