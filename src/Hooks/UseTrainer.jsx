import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const UseTrainer = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking for trainer', user)
            const res = await axiosSecure.get(`/users/trainer/${user.email}`);
            // console.log(res.data);
            return res.data?.trainer;
        }
    })
    return [isTrainer, isTrainerLoading]
};

export default UseTrainer;