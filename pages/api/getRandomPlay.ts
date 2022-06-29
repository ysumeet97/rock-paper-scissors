import type { NextApiRequest, NextApiResponse } from 'next';
import ResponseType from 'types/others/ResponseType';
import { APIConstants, GamePlays } from 'utility/constants';

const getRandomPlay = () => {
    return GamePlays[Math.floor(Math.random() * GamePlays.length)];
};

const getRandomPlayAPICall = async (
    _request: NextApiRequest,
    response: NextApiResponse<ResponseType>
) => {
    const play: string = getRandomPlay();
    setTimeout(() => {
        response.status(200).json({
            status: APIConstants.SUCCESS,
            data: play,
        });
    }, 3000);
};

export default getRandomPlayAPICall;
