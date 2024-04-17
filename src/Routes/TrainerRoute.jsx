import { Navigate, useLocation } from "react-router-dom";
import UseTrainer from "../Hooks/UseTrainer";
import useAuth from "../Hooks/useAuth";

const TrainerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isTrainer, isTrainerLoading] = UseTrainer();
    const location = useLocation();

    if (loading || isTrainerLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isTrainer) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};
export default TrainerRoute;