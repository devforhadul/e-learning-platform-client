import axios from "axios";
import AdminAllClassTable from "../../../Components/Dashboard/TableRow/AdminAllClassTable";
import { Confirm } from "notiflix";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import FullSpinner from "@/Components/Shared/FullSpinner";

const AdminAllClasses = () => {
  const queryClient = useQueryClient();

  const { data: allClass, isPending } = useQuery({
    queryKey: ["AdminAllClass"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-class`);
      return data;
    },
  });

  const updateStatus = async (id, status) => {
    Confirm.show(
      "Class update Confirmation",
      `Are you sure update to ${status}`,
      "Yes",
      "No",
      async () => {
        try {
          const _res = await axios.patch(
            `${import.meta.env.VITE_API_URL}/class-status`,
            { id, status }
          );
          queryClient.invalidateQueries(["AdminAllClass"]);
          toast.success(status, "suceesfully");
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };

  if (isPending) return <FullSpinner />;

  return (
    <div>
      <p className="text-2xl font-semibold mb-4">
        All Class Request({allClass.length})
      </p>

      <AdminAllClassTable allClass={allClass} updateStatus={updateStatus} />
    </div>
  );
};

export default AdminAllClasses;
