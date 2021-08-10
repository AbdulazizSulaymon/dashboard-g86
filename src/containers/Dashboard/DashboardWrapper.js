import styled from "styled-components";

const DashboardWrapper = styled.div`
    display: flex;

    .sidebar{
        width: 300px;
        background-color: gray;
        padding: 20px;
        height: 100vh;
        position: sticky;
        top: 0;

        ul{
            li{
                a{
                    display: block;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color: white;
                    margin-bottom: 10px;

                    &.active{
                        background-color: blue;
                    }
                }
            }
        }
    }

    .rightside{
        flex: 1;
        position: relative;

        header{
            padding: 20px;
            position: sticky;
            top: 0;
            background-color: white;
            z-index: 1000;

            .logo{
                height: 40px;
                margin-right: 20px;
            }
        }

        .content{
            padding: 20px;
        }
    }
`;

export default DashboardWrapper;