import { Router } from "express";
import { HealthCheckResponse } from "@workspace/api-zod";

const router = Router();

router.get("/healthz", (_req, res): void => {
  const data = HealthCheckResponse.parse({ status: "ok" });
  res.json(data);
});

export default router;
