export type AddTeamReqDto = {
  memberIdx: number;
  accIdx: number;
  teamType: string;
  teamName: string;
  preferenceType: string;
};

export type ExportTeamReqDto = {
  teamIdx: number;
  member: number;
};

export type InviteTeamReqDto = {
  memberIdx: number;
  teamIdx: number;
};

export type ManageTeamReqDto = {
  teamIdx: number;
  memberIdx: number;
};

export type UpdateTeamNoticeReq = {
  teamIdx: number;
  teamNotice: string;
};

export type MyTeamListReqDto = {
  memberIdx: number;
};