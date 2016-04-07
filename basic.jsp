<HTML>
    <HEAD>
    </HEAD>

    <BODY>
        <H2>
            <CENTER>
                The sum is:
                <% 
                out.println(Integer.parseInt(request.getParameter("op1")) + 
                    Integer.parseInt(request.getParameter("op2")));
                %>
            </CENTER>
        </H2>
    </BODY>
</HTML>