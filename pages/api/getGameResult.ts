import type { NextApiRequest, NextApiResponse } from 'next';
import ResponseType from 'types/others/ResponseType';
import { APIConstants, GameConstants } from 'utility/constants';

const getResult = (player: string, computer: string) => {
    let result: string = '';
    if (player === computer) {
        result = GameConstants.DRAW;
    } else if (player === 'rock') {
        if (computer === 'paper') {
            result = GameConstants.YOU_LOSE;
        } else {
            result = GameConstants.YOU_WIN;
        }
    } else if (player === 'paper') {
        if (computer === 'rock') {
            result = GameConstants.YOU_WIN;
        } else {
            result = GameConstants.YOU_LOSE;
        }
    } else if (player === 'scissors') {
        if (computer === 'rock') {
            result = GameConstants.YOU_LOSE;
        } else {
            result = GameConstants.YOU_WIN;
        }
    }
    return result;
};

const getGameResult = async (
    request: NextApiRequest,
    response: NextApiResponse<ResponseType>
) => {
    const body = request.body;
    const result: string = getResult(body.player, body.computer);
    setTimeout(() => {
        response.status(200).json({
            status: APIConstants.SUCCESS,
            data: result,
        });
    }, 500);
};

export default getGameResult;
