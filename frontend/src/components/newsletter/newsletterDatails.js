import React from "react";
import api from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

/* hooks */
import useFlashMessage from "../hooks/useFlashMessage";

function newsletterDatails () {
    return(
        <h1>
            Pagina da Noticia
        </h1>
    )
}

export default newsletterDatails;