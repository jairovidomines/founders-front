import { useEffect } from "react";
import { useParams } from "react-router";
import CardDetail from "../../components/CardDetail/CardDetail";
import useProjects from "../../hooks/useProjects/useProjects";
import { useAppSelector } from "../../store/hooks";

export const DetailPage = (): JSX.Element => {
  const { getProjectById } = useProjects();
  const { project: detailTip } = useAppSelector((state) => state.project);
  const { id } = useParams();

  useEffect(() => {
    getProjectById(id!);
  }, [id, getProjectById]);

  return <CardDetail project={detailTip} />;
};
