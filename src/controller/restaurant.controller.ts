import Request from "../types/Request";
import { Response } from "express";
import axios from "axios";
import HttpStatusCodes from "http-status-codes";
import Config from "../config/default";

/**
 * get all restaurants
 * @param req 
 * @param res 
 * @returns 
 */
export const fetchRestaurant = async (req: Request, res: Response) => {
  axios
    .get(`${Config.restaurant_service_url}/fetch`)
    .then((result) => {
      return res.status(HttpStatusCodes.OK).send(result.data);
    })
    .catch((error) => {
      return res
        .status(error.response.status)
        .send({ error: error.response.data });
    });
};
/**
 * get restaurant by code
 * @param req 
 * @param res 
 * @returns 
 */
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
        .status(error.response.status)
        .send({ error: error.response.data });
    });
};
/**
 * search for restaurant by (name/age/code/location)
 * @param req 
 * @param res 
 * @returns 
 */
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
        .status(error.response.status)
        .send({ error: error.response.data });
    });
};
/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
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
        .status(error.response.status)
        .send({ error: error.response.data });
    });
};
/**
 * update restaurant by code
 * @param req 
 * @param res 
 * @returns 
 */
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
        .status(error.response.status)
        .send({ error: error.response.data });
    });
};
/**
 * delete restaurant by code
 * @param req 
 * @param res 
 * @returns 
 */
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
        .status(error.response.status)
        .send({ error: error.response.data });
    });
};
